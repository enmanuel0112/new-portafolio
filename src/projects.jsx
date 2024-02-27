import '../src/scss/content/projects.scss';
import burger from './asset/img/burger.jpg';
import ageCalculator from './asset/img/age-calculator.jpg';
import Dictionary from './asset/img/dictionary.jpg';
import loopstuidos from './asset/img/loopstudios.jpg';

export const Projects = () => {
    return (
        <>
            <div className='my-pages-container'>
                <MyPages image={burger} title={'design burger app'}
                    toolsUses={['html, css, javascript']}
                    viewPage={'https://enmanuel0112.github.io/Burger-Proyect/'}
                    viewCode={'https://github.com/enmanuel0112/Burger-Proyect'}
                />

                <MyPages image={ageCalculator} title={'design age calculator app'} toolsUses={['html, css, javascript']}
                    viewPage={'https://enmanuel0112.github.io/second-fronted-menthor/'}
                    viewCode={'https://github.com/enmanuel0112/second-fronted-menthor'}
                />

                <MyPages image={Dictionary} title={'design  dictionary app'}
                    toolsUses={['html, css, javascript']}
                    viewPage={'https://enmanuel0112.github.io/Dictionary-app/'}
                    viewCode={'https://github.com/enmanuel0112/Dictionary-app'}
                />

                <MyPages image={loopstuidos} title={'design loopstudios landing page'} toolsUses={['html, css, javascript']}
                    viewPage={'#'}
                    viewCode={'#'}
                />
            </div>

        </>
    )
}

const MyPages = ({ image, title, toolsUses, viewPage, viewCode }) => {
    return (
        <>
            <div className='my-pages-content'>
                <div className='my-pages'>
                    <div className='image-content'>
                        <img src={image} alt="fu eestp" />
                    </div>
                    <div className='about-projects'>
                        <h2>{title}</h2>
                        <p>{toolsUses}</p>
                        <div className='project-links'>
                            <a href={viewPage} className='view-page'>view project</a>
                            <a href={viewCode} className='view-code'>view code</a>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}