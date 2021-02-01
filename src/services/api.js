

// TEST API
import axios from 'axios'

const URL = 'http://localhost:3030/api/'

async function fileDownload(request,filename){
    const response = await axios({
        url: URL + request,
        method: 'GET',
        responseType: 'blob',
    }).then((response) => {
         var fileURL = window.URL.createObjectURL(new Blob([response.data]));
         var fileLink = document.createElement('a');
         fileLink.href = fileURL;
         fileLink.setAttribute('download',filename);
         document.body.appendChild(fileLink);
         fileLink.click();
    });
    return response
}


class TestAPI{
    static async getNumbers(){
        try{
            const response = await axios.get(URL + 'getNumbers')
            return response
        }
        catch(e){
            console.log("Error in server method 'getNumbers'", e)
        }
    }
    static async javascriptPDF(){
        try{
            const response = fileDownload('javascriptPDF','javascript.pdf')
            return response
        }
        catch(e){
            console.log("Error in server method 'javascriptPDF'", e)
        }
    }
    static async getFile(){
        try{
            const response = axios.get(URL + 'getFile')
            return response
        }catch(e) {console.log(e)}
    }
}

export default TestAPI;