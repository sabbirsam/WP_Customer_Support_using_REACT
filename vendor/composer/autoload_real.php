<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit12cf446c13a4d0ea8719466b8a159e73
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit12cf446c13a4d0ea8719466b8a159e73', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit12cf446c13a4d0ea8719466b8a159e73', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit12cf446c13a4d0ea8719466b8a159e73::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
