const INITIAL_STATE = {
    // armazenar as informações do Modules e Lesson ativas.
    activeLesson: {},
    activeModule: {},

    modules: [
        {
            id: 1,
            title: 'Iniciando com React',
            lessons: [
                { id: 1, title: 'Primeira aula' },
                { id: 2, title: 'Segunda aula' },
            ],
        },
        {
            id: 2,
            title: 'Aprendendo Redux',
            lessons: [
                { id: 3, title: 'Terceira aula' },
                { id: 4, title: 'Quarta aula' },
            ],
        }
    ]
};

/* 
    Func reducer() para retornar o meu estado inicial

    Aqui no reducer, eu recebo dois parâmetros para cada vez que uma action é disparada ou
    também no primeira momento em que meu store é construido.

    Eu recebo o (state) e ele símboliza o estado anterior antes da alteração que a action pretende fazer no meu estado.
    E também recebo a como segundo parâmetro (action), ai o (state) ele vem no primeiro momento em que o estado global o
    store do Redux está sendo construido que nenhuma action foi disparada ainda, ele vem vázio, então é legal eu preencher  esse
    estado no primeiro momento com o estado inicial da minha aplicação 
*/
export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module,
        };
    }

    /* Como meu estado vai estar no inicio de tudo
     Retornar o inicio de tudo, como ela vai inicializar dentro da minha aplicação */
    return state;
}
