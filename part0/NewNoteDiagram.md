New Note Diagram

``` mermaid

sequenceDiagram

    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: URL redirect address
    deactivate server

    Note right of browser: Submitting the form sends a POST request to /new_note as specified in the HTML of the form. <br/> The server then adds the content of the body of the POST               request that it receives to a notes array, before responding with a URL redirect address.
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: Because the browser received /notes as the redirect URL address, <br/> it will send a GET request to /notes and refresh the page with the responding HTML document.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    Note right of browser: The browser will now sequentially go through the HTML document from top to bottom, <br/> and perform a GET request for any additionally necessary addresses starting with      /main.css

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content": "HTML is easy", "date": "2023-1-1"},...]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes, which should include the recently submitted new note
```
