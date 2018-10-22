<?php

namespace Shift;

use Illuminate\Database\Eloquent\Model;

class ArticleImage extends Model
{
    protected $guarded = [];
    protected $hidden  = ['user_id'];
}
