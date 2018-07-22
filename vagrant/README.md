# Vagrant Boxes

This directory contains a Vagrant box for testing and building purposes.


## Requirements

- [Vagrant](http://www.vagrantup.com/)
- [VirtualBox](https://www.virtualbox.org/)
- [vagrant-vbguest](https://github.com/dotless-de/vagrant-vbguest)


## Using the Dev Box

The dev-box runs a debian system provisioned with all software which is is needed to run the grunt tasks.
All project files are mapped to /project in the root folder.

Start box:
```
vagrant up
```

Connect:
```
vagrant ssh
```

Shutdown box:
```
vagrant halt
```

### puppet modules

The puppet modules are included as git sub modules and need to be initialized.
```
git submodule update --init --recursive
```


- [apt](https://github.com/puppetlabs/puppetlabs-apt)
- [git](https://github.com/puppetlabs/puppetlabs-git)
- [nodejs](https://github.com/willdurand/puppet-nodejs)
- [ruby](https://github.com/puppetlabs/puppetlabs-ruby)
- [stdlib](https://github.com/puppetlabs/puppetlabs-stdlib)
- [wget](https://github.com/maestrodev/puppet-wget)
