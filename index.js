import inquirer from "inquirer";
import qr from 'qr-image'
import fs from "fs"



inquirer
  .prompt([
    {"message":"Type the url: ", 
    "name":"URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    const url= answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt',url,(err)=>{
        if(err) throw err
        console.log("File saved successflly!!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
     console.log("Error: ",error)
    }
  });
