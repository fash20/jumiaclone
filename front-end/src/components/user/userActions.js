import { AiOutlineContainer } from 'react-icons/ai'
import { BiCommentEdit , BiSave} from 'react-icons/bi'
import { ImCreditCard } from 'react-icons/im'
import { GiBackwardTime } from 'react-icons/gi'
import { CgTimer } from 'react-icons/cg'
import '../../styles/UserProfile.css'

export const userActions = [
    {
        name: 'Orders',
        route: "/customer/orders",
        icon: < AiOutlineContainer className="user-profile-icon" />
    },
    {
        name: 'Pending Reviews',
        route: "/customer/pendingreviews",
        icon: <BiCommentEdit className="user-profile-icon" />
    },
    {
        name: 'Voucher Credits',
        route: "/customer/vouchercredits",
        icon: <ImCreditCard className="user-profile-icon" />
    },
    {
        name: 'Saved Items',
        route: "/customer/saveditems",
        icon: <BiSave className="user-profile-icon"/>
    },
    {
        name: 'Recently Viewed',
        route: "/customer/recentlyviewed",
        icon: <CgTimer className="user-profile-icon" />
    },
    {
        name: 'Details',
        route: "/customer/details",
    },
    {
        name: 'Address Book',
        route: "/customer/addressbook",
    },
    {
        name: 'Change Password',
        route: "/customer/changepassword",
    },
    {
        name: 'News Letter',
        route: "/customer/newsletter",
    }


]