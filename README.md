# Action-cable-board example

This is rails action cable example to test action-cable features. 

* ruby 2.4.1
* rails 5.2.1

## Install
```
$ brew install redis # redis required.
$ bundle install
```
## Execute
```
$ foreman start
02:59:46 web.1   | started with pid 5638
02:59:46 redis.1 | started with pid 5639
02:59:46 redis.1 | 5639:C 04 Oct 02:59:46.909 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
02:59:46 redis.1 |                 _._                                                  
02:59:46 redis.1 |            _.-``__ ''-._                                             
02:59:46 redis.1 |       _.-``    `.  `_.  ''-._           Redis 3.2.4 (00000000/0) 64 bit
02:59:46 redis.1 |   .-`` .-```.  ```\/    _.,_ ''-._                                   
02:59:46 redis.1 |  (    '      ,       .-`  | `,    )     Running in standalone mode
02:59:46 redis.1 |  |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
02:59:46 redis.1 |  |    `-._   `._    /     _.-'    |     PID: 5639
02:59:46 redis.1 |   `-._    `-._  `-./  _.-'    _.-'                                   
02:59:46 redis.1 |  |`-._`-._    `-.__.-'    _.-'_.-'|                                  
02:59:46 redis.1 |  |    `-._`-._        _.-'_.-'    |           http://redis.io        
02:59:46 redis.1 |   `-._    `-._`-.__.-'_.-'    _.-'                                   
02:59:46 redis.1 |  |`-._`-._    `-.__.-'    _.-'_.-'|                                  
02:59:46 redis.1 |  |    `-._`-._        _.-'_.-'    |                                  
02:59:46 redis.1 |   `-._    `-._`-.__.-'_.-'    _.-'                                   
02:59:46 redis.1 |       `-._    `-.__.-'    _.-'                                       
02:59:46 redis.1 |           `-._        _.-'                                           
02:59:46 redis.1 |               `-.__.-'                                               
02:59:46 redis.1 | 
02:59:46 redis.1 | 5639:M 04 Oct 02:59:46.914 # Server started, Redis version 3.2.4
02:59:46 redis.1 | 5639:M 04 Oct 02:59:46.915 * DB loaded from disk: 0.001 seconds
02:59:46 redis.1 | 5639:M 04 Oct 02:59:46.915 * The server is now ready to accept connections on port 6379
02:59:48 web.1   | => Booting Puma
02:59:48 web.1   | => Rails 5.2.1 application starting in development 
02:59:48 web.1   | => Run `rails server -h` for more startup options
02:59:48 web.1   | Puma starting in single mode...
02:59:48 web.1   | * Version 3.12.0 (ruby 2.4.1-p111), codename: Llamas in Pajamas
02:59:48 web.1   | * Min threads: 5, max threads: 5
02:59:48 web.1   | * Environment: development
02:59:48 web.1   | * Listening on tcp://localhost:5000
02:59:48 web.1   | Use Ctrl-C to stop
```
