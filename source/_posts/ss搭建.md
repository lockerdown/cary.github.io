---
title: 翻墙搭建过程
date: 2017-07-01T14:50:50.000Z
tags: 翻墙
---

----------------------------ss panel v3------------------------

------------------------------------------------------

#### 网速测试地址：<http://www.speedtest.net/>
#### IPV6测试：<http://test-ipv6.com/>
#### 1080P测试地址:<https://www.youtube.com/watch?v=hZIiIzm1joQ>
#### Shadowsocks-使用说明：[https://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E](http://test-ipv6.com/)
----

### 一键搭建脚本
```
wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
chmod +x shadowsocks-all.sh
./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
```

在centos下运行提示`wget command not found`时输入yum -y install wget 安装wget

### 配置ss
```
apt-get update
apt-get install python-pip
pip install shadowsocks
```
```
vim /etc/shadowsocks.json
```
``` json
{
  "server":"0.0.0.0",
  "server_port":12306,
  "local_address": "127.0.0.1",
  "local_port":1080,
  "password":"my123456",
  "timeout":300,
  "method":"aes-256-cfb",
  "fast_open": true
}
```
```
sudo ssserver -c /etc/shadowsocks.json -d start
```

+ 停止：sudo ssserver -d stop
+ 查看日志: sudo less /var/log/shadowsocks.log
+ 查看端口监听:netstat -nlp

### 加入自启动

```
sudo vim /etc/rc.local
```

### TCP Fast Open


set fast_open to true in your config.json

```
echo 3 > /proc/sys/net/ipv4/tcp_fastopen

vim /etc/sysctl.d/local.conf

```

```
# max open files
fs.file-max = 51200
# max read buffer
net.core.rmem_max = 67108864
# max write buffer
net.core.wmem_max = 67108864
# default read buffer
net.core.rmem_default = 65536
# default write buffer
net.core.wmem_default = 65536
# max processor input queue
net.core.netdev_max_backlog = 4096
# max backlog
net.core.somaxconn = 4096

# resist SYN flood attacks
net.ipv4.tcp_syncookies = 1
# reuse timewait sockets when safe
net.ipv4.tcp_tw_reuse = 1
# turn off fast timewait sockets recycling
net.ipv4.tcp_tw_recycle = 0
# short FIN timeout
net.ipv4.tcp_fin_timeout = 30
# short keepalive time
net.ipv4.tcp_keepalive_time = 1200
# outbound port range
net.ipv4.ip_local_port_range = 10000 65000
# max SYN backlog
net.ipv4.tcp_max_syn_backlog = 4096
# max timewait sockets held by system simultaneously
net.ipv4.tcp_max_tw_buckets = 5000
# turn on TCP Fast Open on both client and server side
net.ipv4.tcp_fastopen = 3
# TCP receive buffer
net.ipv4.tcp_rmem = 4096 87380 67108864
# TCP write buffer
net.ipv4.tcp_wmem = 4096 65536 67108864
# turn on path MTU discovery
net.ipv4.tcp_mtu_probing = 1

# for high-latency network
net.ipv4.tcp_congestion_control = hybla

# for low-latency network, use cubic instead
# net.ipv4.tcp_congestion_control = cubic
```

Then: 
```
sysctl --system
```

### 开启BBR加速

#### 开机后 uname -r 看看是不是内核 >= 4.9

#### 执行 lsmod | grep bbr，如果结果中没有 tcp_bbr 的话就先执行
```
modprobe tcp_bbr
echo "tcp_bbr" >> /etc/modules-load.d/modules.conf
```
#### 执行
```
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
```
#### 保存生效
```
sysctl -p
```
#### 执行
```
sysctl net.ipv4.tcp_available_congestion_control
sysctl net.ipv4.tcp_congestion_control
```
#### 如果结果都有bbr, 则证明你的内核已开启bbr

#### 看到有 tcp_bbr 模块即说明bbr已启动

### 重启VPS
