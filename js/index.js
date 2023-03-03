
const display = document.querySelector('#blank');

const buttons = Array.from(document.getElementsByTagName('button'));

// console.log(buttons)

buttons.map( button => {
    button.addEventListener('click', (e) => {

        // console.log(e.target.innerText);
        switch(e.target.innerText){

            case 'C':
                document.querySelector('input').value = '';
                break;
            case '=':
                try {
                document.querySelector('input').value = eval( document.querySelector('input').value);
                } catch (e) {
                document.querySelector('input').value = document.querySelector('input').value = 'Error!';
                }
                break;
            case '←':
                if( document.querySelector('input').value){
                document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
                }
                break;
            default: 
                document.querySelector('input').value += e.target.innerText;
        }
    })
})