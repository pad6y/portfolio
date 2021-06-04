<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProjectsPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }


    /**
     * Determine whether the user can view the model.
     * 
     * @param \App\Models\User $user
     * @param \App\Models\User $model
     * @return mixed
     */
    public function accessProjects(User $user)
    {
        return $user->hasAnyRoles(['super-admin', 'admin', 'moderator', 'developer']);
    }

    /**
     * Determine whether the user can manage the model.
     * 
     * @param \App\Models\User $user
     * @param \App\Models\User $model
     * @return mixed
     */
    public function manageProjects(User $user)
    {
        return $user->hasAnyRoles(['super-admin', 'admin']);
    }
}
