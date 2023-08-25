import { View, Text, Image, Linking } from 'react-native';

function App(){
    let nome = 'Stephan Güter F. Cunha';
    let formacao = 'Tecnologia em Sistemas para Internet';
    let experiencia = 'Analista de Suporte, Procfit Gestão Orientada a Processos LTDA';
    let projetos = [
        {
          Title: 'Hello World',
          Source: 'https://github.com/StephanGuter/hello-world'
        },
        {
          Title: 'EFCore WebAPI',
          Source: 'https://github.com/StephanGuter/EFCore.WebAPI'
        },
      ];
    let img = 'https://br.gravatar.com/userimage/238904983/b2f4f14d3d763c065b8aab59fd8ba7ee.jpeg?size=256';

    let imgStyle = {
      width: 200, height: 200, alignSelf: 'center', marginTop: 60
    };
    let titleStyle = {
      fontSize: 20, margin: 15
    };
    let txtStyle = {
      fontSize: 15, marginLeft: 25
    };
    let anchorStyle = {
      fontSize: 15, marginTop: 10, marginBottom: 10, marginLeft: 25, color: 'blue'
    };

  return(
      <View>
        <Image
          source={{ uri: img }}
          style={imgStyle}
        />

        <Text style={titleStyle}>
          Dados pessoais
        </Text>

        <Text style={txtStyle}>
          {nome}
        </Text>
        
        <Text style={titleStyle}>
          Formação
        </Text>

        <Text style={txtStyle}>
          {formacao}
        </Text>
        
        <Text style={titleStyle}>
          Experiência
        </Text>

        <Text style={txtStyle}>
          {experiencia}
        </Text>
        
        <Text style={titleStyle}>
          Projetos
        </Text>

        <Text style={anchorStyle} onPress={() => Linking.openURL(projetos[0].Source)}>
          - {projetos[0].Title}
        </Text>

        <Text style={anchorStyle} onPress={() => Linking.openURL(projetos[1].Source)}>
          - {projetos[1].Title}
        </Text>
      </View>
  )
}

export default App;