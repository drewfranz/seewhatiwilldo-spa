#!/bin/bash

whereis node | grep ' ' -ic &> /dev/null
if [ $? == 0 ]; then 
  echo "Node Installed"
else 
  echo "Node not installed"
  exit 1;
fi

whereis gatsby | grep ' ' -ic &> /dev/null
if [ $? == 0 ]; then 
  echo "Gatsby CLI Installed"
else 
  echo "Gatsby CLI not installed"
  exit 1;
fi

cd /var/www/seewhatiwilldo-spa

npm run build