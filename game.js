const textElement = document.getElementById("Text")
const optionButtonsElement = document.getElementById("Option-buttons")

let state = {}

function startGame() {
    state={}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if(showOption(option)){
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener("click", () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(){
    return true
}

function selectOption(options){

}

const textNodes = [
    {
        id: 1,
        text: "Seleccione una clase",
        options: [
            {
                text: "Hyliano",
                setState: {Sword: true, Shield: true, Link: true},
                nextText: 2
            },
            {
                text: "Reencarnado sin empleo",
                setState: { Ludeus: true}
            },
            {
                text: "Stand User",
                setState: {StarPlatinum: true, JoJos: true}
            },
            {
                text: " ",
                setState: {}
            },
        ]
    },
    {
        id: 2,
        text: "Te despiertas en una pradera verde, campamentos de monstruos a la lejania y con un brazo derecho Zonai. La espada que te representa como escudero real, perdida y la princesa rubia a la que debias proteger igual. Se puedes ver que a lo lejos, en direccion opuesta a los campamentos de monstruos parece haber un asentamieto provisinal de personas.",
        options: [
            {
                text: "Ir en direccion al asentamiento hyliano",
                nextText: 3
            },
            {
                text: "Ir hacia los monstruos",
                nextText: 4
            },
            {
                text: "Tratar de recordar que fue lo ultimo que paso",
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        text: ""
    }
]

startGame()