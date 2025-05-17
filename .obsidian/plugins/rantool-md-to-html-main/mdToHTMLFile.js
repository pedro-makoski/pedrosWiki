const MD = require("./module.js");
const fs = require("fs")
const {JSDOM} = require('jsdom')
const beautify = require('js-beautify')

const HTMLDOM = (string) => {
    const parser = new JSDOM(string);

    return parser.window.document;
}

class MDToHTML {
    constructor(fileBase, fileMd) {
        this.md = null;
        this.err = false; 
        this.html = null; 
        this.doc = HTMLDOM(this.html);
        this.values;

        this.loadFiles(fileBase, fileMd)
    }

    loadFiles(fileBase, fileMd) {
        try {
            const dataMd = fs.readFileSync(fileMd, "utf-8");
            this.md = new MD(dataMd);
            this.values = this.md.convertTOHTML();
            
            const dataHtml = fs.readFileSync(fileBase, "utf-8");
            this.html = dataHtml;
            this.doc = HTMLDOM(this.html);
        } catch (err) {
            console.error("Erro ao carregar arquivos:", err);
            this.err = true;
        }
    }

    putLinkInHeader(rel = "canonical", url) {
        const link = this.doc.createElement("link")
        link.setAttribute("rel", rel)
        link.setAttribute("href", url)
        this.doc.head.insertBefore(link, this.doc.head.firstChild)
    }

    putItemInHeader(infos) {
        if(this.html) {
            const meta = this.doc.createElement("meta")
            meta.setAttribute("name", infos.name)
            meta.setAttribute("content", infos.content)

            this.doc.head.insertBefore(meta, this.doc.head.firstChild)
        }
    }

    putDescription(desc) {
        this.putItemInHeader({
            name:"description",
            content:desc
        });
    }

    putAutors(autors) {
        this.putItemInHeader({
            name:"author",
            content:autors
        });
    }

    putKeyWords(keywords) {
        this.putItemInHeader({
            name:"keywords",
            content:keywords
        });
    }

    putTitle(title) {
        if(this.html) {
            const titulo = this.doc.createElement("title")
            titulo.innerHTML = title

            this.doc.head.insertBefore(titulo, this.doc.head.firstChild)
        }
    }

    putMetaOg(title, image, url, description) {
        if(this.html) {
            this.putItemInHeader({
                name:"og:title",
                content:title
            });

            this.putItemInHeader({
                name:"og:type",
                content:"article"
            });

            this.putItemInHeader({
                name:"og:image",
                content:image 
            });

            this.putItemInHeader({
                name:"og:url",
                content:url 
            });

            this.putItemInHeader({
                name:"og:description",
                content:description 
                
            });

            this.putItemInHeader({
                name:"og:site_name",
                content:"RanTool" 
            });

            this.putItemInHeader({
                name:"og:locale",
                content:"pt-BR" 
            });

            this.putItemInHeader({
                name:"twitter:card",
                content:"summary_large_image" 
            }); 

            this.putItemInHeader({
                name:"twitter:title",
                content:title
            });   

            this.putItemInHeader({
                name:"twitter:description",
                content:description
            });   
            
            this.putItemInHeader({  
                name:"twitter:image",
                content:image
            });   
        }
    }

    changeValueInHTML(div, content) {
        this.doc.querySelector(div).innerHTML = content;
    }

    setAllAtributes(elString, keys, values) {
        const el = this.doc.querySelector(elString)
        if(keys.length === values.length) {
            keys.forEach((key, index) => {
                const value =values[index]
                el.setAttribute(key, value)
            });
        }
    }

    putInHTML(divToPut) {
        if(this.html) {
            this.doc.querySelector(divToPut).innerHTML = this.values;
            const res = this.doc.documentElement.outerHTML;
            const indentedRes = beautify.html(res, {
                indent_size: 2,
                preserve_newlines: true,
                max_preserve_newlines: 1,
            })
            
            return indentedRes
        }

        return null 
    }

    writeHTML(divToPut, pathNew) {
        const html = this.putInHTML(divToPut)
        if(html) {
            fs.writeFileSync(pathNew, "<!DOCTYPE html>\n"+html, (err) => {
                if(err) throw err;
            })
        }
    }
}

module.exports = MDToHTML;