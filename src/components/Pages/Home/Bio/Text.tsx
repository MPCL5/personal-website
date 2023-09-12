import styles from './Text.module.scss'

export const BioSectionText = () => {
    return <div className={styles.main}>
        <span className={styles.welcome}>Welcome!</span>
        <h1 style={styles.header}>I’m Masoud <br/> Poorghaffar Aghdam</h1>
        <p className={styles.text}>
            I am a Software Engineer. <br/>
            Currently, I am a graduate student at Bilkent University. <br/>
            I am adventuring realm of Artificial Intelligence from Biology perspective. <br/>
            I think, I can develop both myself and our world :”) <br/>
        </p>
        <button>My personal blog</button>
    </div>
}
