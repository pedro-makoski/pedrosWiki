```go
http.Redirect(w, r, "/", 301)
```
W - writter
r - request
"/" - seria a URL que ele redicionária
e 301 seria o código HTTP, que pode mudar. Pode ser 200 por exemplo, ou afins.