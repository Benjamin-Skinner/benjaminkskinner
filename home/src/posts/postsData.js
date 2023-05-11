import fs from 'fs'
// import path from 'path';
// import matter from 'gray-matter';
import process from 'process'



export default function getPostsData() {
    const postDirectory = process.cwd()

    const filenames = fs.readdirSync(postDirectory)
    console.log(filenames)


    // const allPostsData = 

}