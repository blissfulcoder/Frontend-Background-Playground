

function downloadFile(url) {
    return new Promise(function (resolve, reject) {

        setTimeout(()=>{
            resolve("downloaded-data")
            },3000
        )
        }
    )


}

downloadFile("some file").then(function (data) {
    console.info(data)
})