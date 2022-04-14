# 微信云托管场景化案例集合

在将项目迁移到微信云托管的过程中，因为缺少dockerfile等必要的构建文件，同时自己又没有相关的经验，导致迁移出现卡点。

此项目整理了一些常见的项目案例场景，可以根据自己的需要下载对应文件夹的内容，按照说明替换成自己的项目文件。

项目场景持续整理中，如果你有需要，可以直接填写[征集问卷](https://wj.qq.com/s2/10034327/8f93/)，向我们提交一些想法；如果是比较通用的，我们会收集进来。

## 一、项目清单

#### 1. [Nginx+HTML分发模版](./nginxdist/)

如果你有vue或者其他打包的web的项目，需要使用nginx分发，可以参考此模版，将其中的dist文件夹内容替换成自己的项目内容。

Nginx分发配置，可以直接修改根目录的 `my.conf`

#### 2. [Nginx+Node分发模版](./nginxnode/)

如果有一个node项目，同时需要nginx做反向代理，实现一些扩展需求，则可以参考此项目。

此处Dockerfile中最后CMD命令，是执行sh文件，可以在app/start.sh编写修改。

Nginx分发配置，可以直接修改根目录的 `my.conf`

#### 3. [PHP中SG11扩展安装模版](./phpsg11)

发问的人比较多，在这里直接写一下，给了一个php单一文件，如果是框架项目，需按需自己修改Dockerfile的安装步骤。

SG11的安装命令如下，可以在自己dockerfile的FROM下面一行添加下述命令，也可以整合你自己的安装步骤。

``` dockerfile
RUN PHP_VERSION=$(php -v | head -n1 | cut -d' ' -f2 | cut -d. -f1-2) \
    && mkdir -p /tmp/sourceguardian \
    && cd /tmp/sourceguardian \
    && curl -Os https://www.sourceguardian.com/loaders/download/loaders.linux-x86_64.tar.gz \
    && tar xzf loaders.linux-x86_64.tar.gz \
    && cp ixed.${PHP_VERSION}.lin "$(php -i | grep '^extension_dir =' | cut -d' ' -f3)/sourceguardian.so" \
    && echo "extension=sourceguardian.so" > /usr/local/etc/php/conf.d/15-sourceguardian.ini \
    && rm -rf /tmp/sourceguardian
```

## 二、贡献者征集

欢迎有经验的开发者来贡献自己认为比较常用的项目包，直接提交PR，我们会在review后合并到项目里。

- [zirali李冠宇](https://github.com/Tcloudbase)