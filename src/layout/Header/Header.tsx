import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'

export default function Header() {
  return (
    <div className="flex mt-36px">
      <Link to="/">
        <Logo height={'50px'} width={'150px'} />
      </Link>
    </div>
  )
}
