// // DOM
// const ulDOM = document.createElement('ul')

// const liDOM1 = document.createElement('li')
// liDOM1.innerText = 'Javascript'

// const liDOM2 = document.createElement('li')
// liDOM2.innerText = 'ReactJS'


// ulDOM.appendChild(liDOM1)
// ulDOM.appendChild(liDOM2)

// document.body.appendChild(ulDOM)

// React
// const ulReact = React.createElement(
//     'ul',
//     null,
//     React.createElement('li', null, 'Javascript'),
//     React.createElement('li', null, 'ReactJS')
// )



const postItem = React.createElement(
    'div',
    {className: 'post-item'},
    React.createElement(
       'h2',
       {title: 'Hoc React tai F8',
        style: 
        { 
            color: 'red',
            fontSize: '100px'
        }
        
        },
       'Hoc ReactJS' 
    ),
    React.createElement(
       'p',
       null,
       'Hoc ReactJS tu co ban toi nang cao' 
    )
)

// Get root element
const container = document.querySelector('#root')

// React @17
//React-DOM -> render UI
// ReactDOM.render(postItem, root )


// React @18
const root = ReactDOM.createRoot(container)
root.render(postItem)

var courses = [
    'JS',
    'PHP',
    'Ruby'
]

var htmls = courses.map(function(course) {
    return `<h2>${course}</h2>`
});

console.log(htmls);