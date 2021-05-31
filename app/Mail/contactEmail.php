<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class contactEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(Request $request)
    {
        // dd($request->name);
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'body' => 'required'
        ]);

        return $this->view('emails.contact')->with(['name' => $request->name, 'email' => $request->email, 'body' => $request->body]);
    }
}
