import { Lista, Principal, Titulo } from './styled'
import FichaAnimal from './FichaAnimal'
import animaisDados from '@/data/animais.json'

const Home = () => {
    return (
        <Principal>
            <Titulo>Olá! Veja os amigos disponíveis para adoção!</Titulo>
            <Lista>
                {animaisDados.map(animal => (
                    <FichaAnimal key={animal.id} {...animal} />
                ))}
            </Lista>
        </Principal>
    )
}

export default Home
