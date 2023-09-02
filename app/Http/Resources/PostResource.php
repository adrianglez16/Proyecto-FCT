<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title, 
            'content' => $this->content, 
            'status' => $this->status, 
            'first_img' => $this->first_img, 
            'user_id' => $this->user_id, 
            'created_at' => $this->created_at, 
            'updated_at' => $this->updated_at, 
        ];
        
    }
}
