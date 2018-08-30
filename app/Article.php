<?php

namespace Shift;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $guarded = [];
    protected $hidden = ['id', 'user_id'];
    protected $appends = ['formatted_created_at', 'formatted_updated_at'];

    public function getFormattedCreatedAtAttribute() {
        return $this->created_at->diffForHumans();
    }

    public function getFormattedUpdatedAtAttribute() {
        return $this->updated_at->diffForHumans();
    }
}
