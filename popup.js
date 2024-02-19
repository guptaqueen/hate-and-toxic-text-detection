const from = document.getElementById('hate text_detction');

from.addEventListener('process',async(Event) =>{
    Event.preventDefault();

    const input = document.getElementById('hate-text').value ;
    
    try{
        const response = await fetch('http://localhost:3000/',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: inputElement.value })
        });
        if(response.ok){
            then(res => res.json())
                    .then(res => {
                        responseElement.innerText = res[0]?.label === 'POSITIVE' ? 'Positive vibes detected' : 'Negative vibes detected!';
                        inputElement.value = '';
                    })

        }
    }catch(error){
        console.error('Request failed:',error)
    }
});