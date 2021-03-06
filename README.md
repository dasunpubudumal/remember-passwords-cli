# Password Hash Storage CLI

This is a simple password storage Commandline Interface created using `NodeJs`. For more information about this, you can refer to my [blogpost](https://dasunpubudu.wordpress.com/2017/12/27/password-storage-cli/).

## How to install?

### Note - You need MongoDB installed and started to run this CLI.

1. Clone the repository.
2. Run `npm install` in the project directory to install the dependencies.
3. Run `npm link` to create a _Symlink_. If you are using UNIX shells, (Linux or Macintosh) use `sudo npm link` to give administrator priviledges when creating the symlink.
4. To test a successfull installation, type `ph --version` and you have to receive `1.0.0` as the result.

## How to use?

* You can get help by running `ph --help` command.
* You can call the CLI using **ph** command. (Just like **ng** in Angular)
* There are four primary commands. 

```
    add | a      Add a password
    show | s     Show a password
    remove | r   Remove a password
    edit | u     Edit a password
    everything|e Show Everything
```

## Examples

* Adding a password can be done via `ph add` .
* Removing a password can be done via `ph remove` .
* Updating passwords can be done via `ph edit` .
* Showing a password can be done via `ph show` .

 Just type whatever the command that you want to enter (Say `ph add`) and hit enter. It will ask questions and answer them appropriately.

### Note - You can use Aliases as well. 
For an example, you can use `ph a` instead of `ph add` .


