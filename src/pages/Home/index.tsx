import { useObterAnimais } from '@/hooks/useObterAnimais'
import { Lista, Principal, Titulo } from './styled'
import FichaAnimal from './FichaAnimal'

const Home = () => {
    const { animaisDados } = useObterAnimais()

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
