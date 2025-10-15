import './Button.css'
import * as motion from "motion/react-client"


export default function Button(){








    return(
        <>
            <div>
                <motion.button className="button"
                 whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            >
                    Login
                </motion.button>
            </div>
        
        
        </>
    );
}


