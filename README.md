# About REDUX
Redux é uma biblioteca de arquitetura para aplicações em React e React-Native (qualquer aplicação em JS)
o Redux vai ser usado no momento em que eu precise gerenciar os dados da minha aplicação / as informações da minha aplicação,
essas informações podem ser ex: por entrada de dados de usuários, podem ser informações que venham através de uma chamada á API,
pode ser informações através de ações do usuário. E essa informações não são teóricamente apenas dados e não são apenas arrays e objetos,
são em sí ações do usuário como clicks em botões, se ele navegar para outra página o que eu preciso fazer, então o Redux lida muito e ajuda
a gente a controlar como a minha aplicação deve se comportar baseado nas ações do usuário, baseado em informações de entrada, por isso o Redux
têm várias integrações com outras bibliotecas como por exemplo: redux-saga que fazem esses efeitos colaterais na aplicação.
A gente utiliza o Redux quando precisamos básicamente centralizar as lógicas de funcionamentos as regras de negócios da nossa aplicação em
um único local, o Redux ajuda a gente a controlar os efeitos colaterais tanto do usuário quanto do próprio sistema, esses efeitos colaterais
são baseado em alguma ação que aconteceu por exemplo um termino de uma aula que aconteceu em um componente totalmente desconexo da SET-BAR
eu fui para a próxima aula automáticamente ou sejá a gente fez esse processo de forma automática ou sejá foi um efeito colateral que foi
desparado através de uma ação de usuário ou do sistema.