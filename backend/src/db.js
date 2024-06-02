const {MongoClient} = require('mongodb')

// Url
const url = "mongodb+srv://luvsscorpius:January18Th*@cluster0.xlf2lsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const Mongo = async () => {
    try {
        const client = await MongoClient.connect(url)
        console.log('Conectado ao banco de dados')

        const db = client.db('usuarios')
        const documents = await db.collection('usuarios').find({}).toArray()

        client.close()
        console.log('Conexão fechada com o banco de dados')

        return documents
    } catch (error) {
        console.error('Erro ao se conectar ao banco de dados: ', error)
    }
}

module.exports = Mongo
