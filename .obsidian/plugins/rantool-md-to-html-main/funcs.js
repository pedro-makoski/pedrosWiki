const MDToHTML = require("./mdToHTMLFile.js");
const replaceItens = require("./replace-items.js");
const configs = require("./configs.js");
const fs = require("fs")
const path = require("path");
const { spawn } = require("child_process");

function readFile(path) {
    try {
        const data = fs.readFileSync(path, "utf-8")
        return data 
    } catch {
        return null 
    }
}

function copyAllFiles(beforePath, newPath, exceptsExts) {
    try {
        const files = fs.readdirSync(beforePath);

        files.forEach((pathOfFolder) => {
            if(exceptsExts.includes(path.extname(pathOfFolder))) {
                return
            }

            const beforePathOfFile = path.join(beforePath, pathOfFolder);
            const newPathOfFile = path.join(newPath, pathOfFolder);

            const status = fs.statSync(beforePathOfFile);
            if(status.isFile()) {
                fs.copyFileSync(beforePathOfFile, newPathOfFile)
            } else if(status.isDirectory()) {
                fs.mkdirSync(newPathOfFile, {recursive:true})
                copyAllFiles(beforePathOfFile, newPathOfFile, exceptsExts)
            }
        })
    } catch {
        throw new Error("Erro ao copiar os arquivos")
    }
}

function addToJSON(obj, path) {
    const jsonOfBlogstxt = readFile(path);
    const jsonOfBlogs = JSON.parse(jsonOfBlogstxt);
    jsonOfBlogs.push(obj)
    const newJsonOfBlogs = JSON.stringify(jsonOfBlogs);
    fs.writeFileSync(path, newJsonOfBlogs, (err) => {
        if(err) throw new Error("Erro ao criar o JSON");
    })
}

async function commitAndPush(branch, nameBlog, pathGit) {
    const executarComando = (comando, args) => {
        return new Promise((resolve, reject) => {
            const processo = spawn(comando, args, { cwd: pathGit });

            let erroData = '';

            processo.stderr.on('data', (data) => {
                erroData += data.toString();
            });

            processo.on('close', (code) => {
                if (code === 0) {
                    resolve();
                } else {
                    reject(new Error(`Erro ao executar ${comando} ${args.join(' ')}: ${erroData}`));
                }
            });
        });
    };

    return executarComando('git', ['switch', branch])
        .then(() => executarComando('git', ['add', '.']))
        .then(() => executarComando('git', ['commit', '-m', `Criação do blog ${nameBlog}`]))
        .then(() => executarComando('git', ['push', '-u', 'origin', branch]))
        .catch((erro) => {
            throw erro; 
        });
}

function getAuthors(authorNames) {
    const all = authorNames.split(", ")
    let res = ""
    all.forEach((autor) => {
    res+=`<div class="autor"><img src="../../../../src/images/autores/fundadores/${autor.trim().toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.png" alt="Imagem do autor: ${authorNames}"><p>${autor}</p></div>`;
    })
    return res 
}

function postNewBlog(name, area, imagemHeaderPath, pathToCopy, markdownPath, originPath, description, autors, keywords, altHeader) {
    const md = readFile(markdownPath);
    const pathGit = configs["path-git"];
    const jsonPlace = configs["json-place"];
    const fullJsonPlace = path.join(pathGit, jsonPlace);
    const nameFile = replaceItens(name, [" "], ["-"]).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "-").replace(/[?/\\`^#@!]/g, "");
    const areaName = replaceItens(area, [" "], ["-"]).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(" ", "-").replace(/[?/\\`^#@!]/g, "");
    const pathBlogs = path.join(pathGit, configs["path-blogs"]);
    const newAreaNameOnPath = areaName
    const newNameNameOnPath = nameFile
    const folderPath = path.join(pathBlogs, newAreaNameOnPath, newNameNameOnPath);
    const pathOfTheBlogRelative = path.join(configs["path-blogs"], newAreaNameOnPath, newNameNameOnPath)
    const nameImage = path.basename(imagemHeaderPath)
    const newImagePath = path.join(pathOfTheBlogRelative, nameImage);
    const nameFileChangeExt = `index.html`
    const htmlNameFile = path.join(folderPath, nameFileChangeExt)
    const htmlNameFileRelative = path.join(pathOfTheBlogRelative, nameFileChangeExt)

    if(md) {
        const url = `https://www.rantool.com${htmlNameFileRelative.replaceAll("\\", "/")}`
        fs.mkdirSync(folderPath, {recursive:true})
        const mdtohtml = new MDToHTML(path.join(originPath, "./template.html"), markdownPath);
        mdtohtml.putTitle(name)
        mdtohtml.putKeyWords(keywords)
        mdtohtml.putAutors(autors)
        mdtohtml.putDescription(description)
        mdtohtml.putLinkInHeader("canonical", url)
        mdtohtml.putMetaOg(name, `https://www.rantool.com${newImagePath.replaceAll("\\", "/")}`,url, description)
        mdtohtml.changeValueInHTML(".authors_of_blog", getAuthors(autors))
        mdtohtml.changeValueInHTML(".time time", (new Date()).toLocaleDateString("pt-br", {
            weekday: "long",	
            day:"2-digit",
            month:"2-digit",
            year:"numeric",
            hour: "2-digit",
            minute: "2-digit"
        }))
        mdtohtml.setAllAtributes(".header-img", ["src", "alt"], [imagemHeaderPath, altHeader])
        mdtohtml.changeValueInHTML(".tittle", name)
        mdtohtml.writeHTML("#root", htmlNameFile);
        copyAllFiles(pathToCopy, folderPath, [".md"]);
        addToJSON({
            nome:name,
            area:area,
            imagem:newImagePath.replaceAll("\\", "/").substring(1),
            local:htmlNameFileRelative.replaceAll("\\", "/").substring(1)
        }, fullJsonPlace)
        commitAndPush(configs["branch"], nameFile, pathGit)
        return; 
    }

    throw new Error("Aconteceu algum erro")
}

module.exports = postNewBlog