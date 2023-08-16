import React from 'react'
import './SlideList.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Slide from 'react-reveal/Slide';

export default function Slide5() {
  return (
    <div className='list'>
      <Slide right>
      <span className='listTile'>Action Movies</span>
        <div className='wrapper'>
        <ArrowBackIosIcon className='slideArrow left'fontSize='large'/>
            <div className='containerSlide'>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcXKmWLePRwD7kdemm8ceDUDs--_OTVVvWqKd9xc_Ggqs2SNzeqtOelAahT_HFj6BhADLilAZDn_a5JmTeMvnTg63xJpZV3sfgVHZX0vFdEp6ebAXqgNPrcX-hwkOW_KEIbA.jpg?r=766'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABck9gV5UKAVG25HBfyO2Ob3xuD4t7pb03OtVURG4ldVQyNTgV2VntzkWmih9zmQ0YiN8p1ShYAsEwJyAC3NB0X1zEegaLELhMpAFhTJ3uQlT2898_fmUHCaMHKQZ9QhVKV6z.jpg?r=dab'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWHhGvbMpOr6j1pa6yHd7Csw4zDJDtHBXRIvhMwCPEfXnDF_bGBKUg7ts3qbqb5JBzgGxs1ByjURfeIhiMU9RHj8OOqGenoKwgbAEt5kdAGvRD4d2yejXUy5jV96LEOwrhd-.jpg?r=557'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZaScSzjhoZGb-C7p2m7oARAOZxiAfxapuXC4u-_pThtETIUJPuD2iuTjOhKDcJ8l0AEYIpfIzENh4_C1g6g85vwJIfB9IY8coiygjTrTcE1X3-cdSANeW9vCDeneUi0re3G.jpg?r=604'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUsEBpPhxY_I0JEW3C3crv29NkPtqIoNWDZn0tw5HBEWg5B50o0vFRuvBfY9-0tCPm7rXHnh22pnqGMjUteM9J5SYUqGljqOMEWcb3JgialY8fXykpqloOaQrTwlXdmeQpQl.jpg?r=442'/>  
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYpuwL3Lexq4UGarZ1xyanArJjiVcDiZ5AWfCp9n5w7pVE9lDI_gkhRr-lkThyHATCmol-ygbeuhIYH73HyPZEtdRGthK2myMIodfvucrAT4mnV_1K3nE_U3XyDuDjqkfH89.jpg?r=4ff'/> 
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSZ-2ePAaeyCIwc7qpfzGjYjeq-iKQIHL9PLkZ3hSugLXEomSuZPzkmNQ1iiT5rNvyYAsxbJ4HgOg91FQYsgVNx97ADvsessZ_j22KwGx5myTLZwRiRNtq_jE-6O1VsMyFpV.jpg?r=183'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaYPEkLhd6kcGrV-SuAJgucN-gUYR77n8GYp8rOCtA-9lorn7RIwGwhZ_d764n3RFETyaUramapu4cfl0-85HS2ySLFOm32HcztDFB5pTeu8KD3QkLzbx-wrX3rgE2BUiZOq.jpg?r=9ff'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTZ20ubwQZL9WN3-Vc36eoLiU0ig5rQ_THPTa9indbfonyaI_xBEOwRcbIMcCCOgX0fM08qb-W-jR96sp_aHreHU6qEiD2nbeJsBHf4qOPHOqEQrpv0IZX3UxZnypy9e281P.jpg?r=f6a'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTjMIbahfT-lWZ0I_w-th-OrhWLHzNexCd3pueKFFDTj2UTj5FmYBD_B_ou6XJ1sguihlMP61qljnV0QBGOJfxsg8RNgvY5kGQyFCUpiVWJH7Y8TaWCcMYxSmDGxIFtJF3U-.jpg?r=187'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWNgXU6mMANoxrE9HxqvvMPBvVBrpdemWcUHOXbbvZ0PzfJtMYuBNUq-GLTUYRvfZZK6JCTVRAJZaBFAHqstVhIJyW03LF061CE.jpg?r=d42'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfcUAoqF74FrhC4hj1TMPxXl-88PdD3iWI27F9jkcU9-1aep5mXvxbO0oEgyrnX6zB9aaZOUKbyful6EQr0WWleURMYXBIOoLW4.jpg?r=d36'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfhr8VrUkVBRWkipgPOZCUGIvq994uqPpBHDwmcMmrCuxqfGCd03vRe8KcDigrzKNh5TTjaKttX2I178OANDX_oJLIwPt236VB0.jpg?r=994'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQGOcY5-lhWuDRQBON2J4-v4G88U0vejBNW12H3C11eLhFv26da6dn6Jbh1-iXkHbvqBdY6SMMeLHOvuCu5ukm-XI-oZQ49vo4U.jpg?r=494'/>
                               
            </div>
        <ArrowForwardIosIcon className='slideArrow right'fontSize='large'/>
        </div>
        </Slide>
    </div>
  )
}
