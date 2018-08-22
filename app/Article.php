<?php

namespace Shift;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $guarded = [];
    protected $hidden = ['id', 'user_id'];
}
