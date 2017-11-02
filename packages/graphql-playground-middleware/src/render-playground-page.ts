export interface MiddlewareOptions {
  endpoint: string
  subscriptionEndpoint?: string
  version: string
}

export default function renderPlaygroundPage(options: MiddlewareOptions) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui">
  <title>Graphcool Playground</title>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/graphql-playground@${options.version}/middleware-build/static/css/main.css" />
  <link rel="shortcut icon" href="//cdn.jsdelivr.net/npm/graphql-playground@${options.version}/middleware-build/favicon.png" />
  <script src="//cdn.jsdelivr.net/npm/graphql-playground@${options.version}/middleware-build/static/js/main.js"></script>
</head>
<body>
<div id="root">
    <style>
        body {
            background-color: rgb(23,42,58);
            font-family: Open Sans,sans-serif;
            height: 90vh;
        }
        #root {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .loading {
            font-size: 32px;
            font-weight: 200;
            color: rgba(255,255,255,.6);
            margin-left: 20px;
        }
        img {
            width: 78px;
            height: 78px;
        }
        .title {
            font-weight: 400;
        }
    </style>
    <img src='http://cdn.jsdelivr.net/npm/graphql-playground/middleware-build/logo.png' alt=''>
    <div class="loading">
        Loading <span class="title">GraphQL Playground</span>
    </div>
</div>
  <script>
    window.addEventListener('load', function(event) {
      GraphQLPlayground.init(document.getElementById('root'), ${JSON.stringify(
        options,
        null,
        2,
      )})
    })
  </script>
</body>
</html>
`
}