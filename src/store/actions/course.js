// Função que vai declarar tanto o Modulo quanto as Lesson ativas
export function toggleLesson(module, lesson) {
    // Esse retorno deve ter o formato padrão que Redux utiliza.
    return {
        /* Nós sempre precisamos de uma chave chamada "type: '' " essa chave vai indicar
        qual que é a ação que está sendo realizada e essa ação precisa ser única dentro do Redux então
        vou dar o nome de 'TOGGLE_LESSON' */
        type: 'TOGGLE_LESSON',

        // E aqui posso enviar qualquer outra informação
        module,
        lesson,
    };
}
