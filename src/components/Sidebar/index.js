import React from "react";
// Para mim conseguir compartilhar algumas informação para algo componente.
// Então esse { connect } quer compartilhar o estado do Redux para meu componente Sidebar
import { connect } from 'react-redux'; // vou pegar os modules usando o connect

// Vai pegar o objeto que eu importei { CourseActions } e vai mapear em forma de propriedades aqui neste componente
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course';

/*, { Component }
    Dentro do { onClick } do Botão, vou precisar da função que vem no { connect } chamada dispatch,
    ela vai vim no parâmetro da minha função do Sidebar

    Todo o componente que eu utilizo no { connect } do Redux eu recebo também um (dispatch),
    essa dispatch serve para mim disparar actions para Redux e essas actions vão ser ouvidas por todos os
    Reducers da minha aplicação
*/
const Sidebar = ({ modules, toggleLesson }) => (
    <aside>
        { modules.map(module => (
            <div key={ module.id }>
                <strong>{ module.title }</strong>
                {/* Exibir todas as aulas daquela modulo */}
                <ul>
                    { module.lessons.map(lesson => (
                        <li key={ lesson.id }>
                            { lesson.title }
                            <button
                                    onClick={() => toggleLesson(module, lesson)
                                }
                            >
                                Selecionar
                            </button>
                        </li>
                    )) }
                </ul>
            </div>
        )) }
    </aside>
);

// Função que recebe o estado e retorna o objeto
const mapStateToProps = state => ({
    modules: state.course.modules
});

// Retorna um objeto, no parâmetro do meu componente
const mapDispatchToProps = dispatch => 
    bindActionCreators(CourseActions, dispatch);

/* No primeiro parâmetro do connect recebe uma função, essa função recebe uma estado
e eu devo retornar dessa função quais propriedades eu quero daquele estado. 
Nesse meu caso o o estado é só um modulo então eu vou querer tudo */
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
