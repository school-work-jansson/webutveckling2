# Länkar
- [Curvy css :D](https://www.youtube.com/watch?v=lPJVi797Uy0)
- [Typewriter](https://codepen.io/denic/pen/GRoOxbM)
    - css
    ```css
    .wrapper {
        height: 100vh;
        /*This part is important for centering*/
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .typing-demo {
        width: 22ch;
        animation: typing 2s steps(22), blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: monospace;
        font-size: 2em;
    }

    @keyframes typing {
        from {
            width: 0
        }
    }
        
    @keyframes blink {
        50% {
            border-color: transparent
        }
    }
    ```
    - html
    ```html
    <div class="wrapper">
        <div class="typing-demo">
        This is a typing demo.
        </div>
    </div>
    ```
