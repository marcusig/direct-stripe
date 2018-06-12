<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8846328b16865345f37fa7cdc109b26f
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8846328b16865345f37fa7cdc109b26f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8846328b16865345f37fa7cdc109b26f::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
