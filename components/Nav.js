import Link from 'next/link';
import { useColorModeValue, lightModeValue, darkModeValue } from '@chakra-ui/react';
import { Button, useColorMode } from '@chakra-ui/react';
import styles from './Nav.module.css';

//{styles.nav}

function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    )
  }

export default function Nav() {
    const value = useColorModeValue(lightModeValue, darkModeValue)
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link legacyBehavior href="/">
                        <a className={styles.a}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/add-post" className='rounded-2xl'>
                        <a className={styles.a}>Add post</a>
                    </Link>
                </li>
                <button type="button" onClick={Example} className={styles.button}>
                    Toggle {value === 'light' ? 'Dark' : 'Light'}
                </button>
            </ul>
        </nav>
    );
}