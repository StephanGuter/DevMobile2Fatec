import { View, Text, ScrollView } from 'react-native';
import { Job } from './src/Job/index'
import { styles } from './style'

function App(){
  const jobDataSource = [
    {
      "id": 1,
      "jobTitle": "Full Stack Developer",
      "salary": 8400,
      "jobDescription": "Desenvolva aplicativos web e móveis. Experiência em JavaScript, React e Node.js.",
      "contactEmail": "recruitment@company1.com"
    },
    {
      "id": 2,
      "jobTitle": "Senior Information Security Analyst",
      "salary": 19000,
      "jobDescription": "Proteja nossos sistemas contra ameaças cibernéticas. Certificações de segurança são um plus.",
      "contactEmail": "securityjobs@company2.com"
    },
    {
      "id": 3,
      "jobTitle": "Data Engineer",
      "salary": 10500,
      "jobDescription": "Projete soluções de armazenamento e processamento de dados. Experiência em Big Data é desejável.",
      "contactEmail": "dataengineer@company3.com"
    },
    {
      "id": 4,
      "jobTitle": "DevOps Specialist",
      "salary": 11800,
      "jobDescription": "Otimize nossos processos de desenvolvimento e implantação. Conhecimento em Docker e CI/CD é necessário.",
      "contactEmail": "devops@company4.com"
    },
    {
      "id": 5,
      "jobTitle": "Level 1 Technical Support",
      "salary": 5600,
      "jobDescription": "Forneça suporte técnico aos clientes. Boa comunicação e paciência são essenciais.",
      "contactEmail": "support@company5.com"
    }
  ]

  const jobs = jobDataSource.map((value, key) => {
    return <Job 
      key={key}
      value={value.id}
      jobTitle={value.jobTitle}
      salary={value.salary}
      jobDescription={value.jobDescription}
      contactEmail={value.contactEmail}
    />
  })

  return(
    <View>
      <Text style={styles.title}>Vagas</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {jobs}
      </ScrollView>
    </View>
  )
}

export default App;