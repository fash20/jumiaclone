import React from 'react'
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

function Rating(props) {
    const star = []
    const starGenerator = (n) => {
        if (n > 5)
        return
        var m = n + 1;
        console.log(star)
        for (let i = 1; i <= n.toFixed(0); i++) {

            if (m >= 1) {
                star.push(m - 1)
                m = m - 1

            }
            else if ((m >= 0.5) && (m < 1)) {
                star.push(0.5)
            }

        }
    }


    return (
        <div>
            <span style={{ fontSize: '14px', color: 'gold', height: '30px', margin: '4px' }}>
                {
                    starGenerator(props.rating)
                }
                {
                    star.map(item => (
                        item >= 1 ? <BsFillStarFill style={{ marginRight: '2px' }} key={item} /> : <BsStarHalf key={item} />
                    ))

                }  </span>
        </div>
    )
}

export default Rating
