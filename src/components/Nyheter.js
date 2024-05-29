import React from 'react';
import '../App.css';
import Navbar from './Navbar';

const Nyheter = () => {
    return (
    <div className='fullPage'>
        <Navbar />
        <main>
            <article className='blog-post'>
            <a href='/Post1'>
                <h2 className='blog-post-title'>Veckans Sammanfattning, Vecka 1</h2>
                <p className='blog-post-excerpt'>En Inblick i Arbetsveckan 2024-03-06 till 2024-03-13</p>
                </a>

            </article>
            <article className='blog-post'>
            <a href='/Post2'>
                <h2 className='blog-post-title'>Veckans Sammanfattning, Vecka 2</h2>
                <p className='blog-post-excerpt'>En Inblick i Arbetsveckan 2024-03-13 till 2024-03-20</p>
            </a>
            </article>
            <article className='blog-post'>
            <a href='/Post3'>
                <h2 className='blog-post-title'>Veckans Sammanfattning, Vecka 3</h2>
                <p className='blog-post-excerpt'>En Inblick i Arbetsveckan 2024-03-20 till 2024-03-27</p>
            </a>
            </article>
            <article className='blog-post'>
            <a href='/Post4'>
                <h2 className='blog-post-title'>Veckans Sammanfattning, Vecka 4</h2>
                <p className='blog-post-excerpt'>En Inblick i Arbetsveckan 2024-03-27 till 2024-04-05</p>
            </a>
            </article>
            <article className='blog-post'>
            <a href='/Post5'>
                <h2 className='blog-post-title'>Veckans Sammanfattning, Vecka 5</h2>
                <p className='blog-post-excerpt'>En Inblick i Arbetsveckan 2024-04-05 till 2024-04-12</p>
                </a>

            </article>
            <article className='blog-post'>
            <a href='/Post6'>
                <h2 className='blog-post-title'>Veckans Sammanfattning, Vecka 6</h2>
                <p className='blog-post-excerpt'>En Inblick i Arbetsveckan 2024-04-12 till 2024-04-19</p>
            </a>
            </article>
        </main>
        <footer>
            <div className='footer-title'>
                <h3>Contact us</h3>
            </div>

            <div className='footer-information'>
                <div className='footer-info'>
                    <p>
                        Sharing
                    </p>
                </div>
                <div className='footer-info'>
                    <p>
                        Pages
                    </p>
                </div>
                <div className='footer-info'>
                    <p>
                        Links
                    </p>
                </div>
            </div>
         
        </footer>
    </div>
  )
}

export default Nyheter;
