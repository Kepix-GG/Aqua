const url = 'https://api.github.com/users/'  //
let output = document.getElementById('output')

const search = async (e)=> {
    e.preventDefault()
    let input = document.getElementById('name')
    const res = await fetch(url+input.value)
    const req = await res.json()
    console.log(req)
    drawUser(req)
    input.value = ''

}

const drawUser = (user) => {
            let div = document.createElement('div')
            let h3 = document.createElement('h3')
            let p = document.createElement('p')
            let img = document.createElement('img')
            let a = document.createElement('a')
    
            h3.innerHTML=user.login
            img.src = user.avatar_url
            
            output.appendChild(img)
            output.appendChild(p)
            output.appendChild(h3)
            
            document.body.appendChild(output)
}
