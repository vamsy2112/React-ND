const heading = React.createElement('h1', {className: 'vamsi'}, 'Namastey everyone from react!')
    const heading2 = React.createElement('h2', {className: 'vamsi2'}, 'heading 2')
    const container = React.createElement('div', {id: 'container'}, [heading, heading2])

    console.log(heading)

    const root = ReactDOM.createRoot(document.getElementById('root'))
    console.log(root)

    root.render(container)