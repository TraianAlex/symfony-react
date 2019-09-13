<?php

namespace App\Api;

use Symfony\Component\Routing\Annotation\Route;

/**
 * @Annotation
 */
class ApiRoute extends Route
{
    public function setDefaults($defaults)
    {
        return array_merge(
            ['_is_api' => true],
            parent::getDefaults()
        );
    }

}