<?php

namespace Rewrite;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $guarded = [];
    protected $hidden  = ['user_id'];
    protected $appends = ['trimmed_article_title', 'formatted_created_at', 'formatted_updated_at'];

    public function getTrimmedArticleTitleAttribute() {
        return str_limit($this->title, 30);
    }

    public function getFormattedCreatedAtAttribute() {
        return $this->created_at->diffForHumans();
    }

    public function getFormattedUpdatedAtAttribute() {
        return $this->updated_at->diffForHumans();
    }
}
