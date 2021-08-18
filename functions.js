async function get_data(){
    var response = await fetch(`https://api.github.com/users/${document.getElementById('user').value}`)
    var gitData = await response.json();
    console.log(gitData)
    if(gitData.message!="Not Found"){
        document.getElementById('display').innerHTML = `<h1>${gitData.login} has ${gitData.followers} followers</h1>`
        document.getElementById('display').innerHTML += `<img src=${gitData.avatar_url}>`
    }else{
        document.getElementById('display').innerHTML = `<h1>User not found. Try again</h1>`

    }

}