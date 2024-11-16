---
sidebar_position: 3
description: Troubleshoot issues spotted by the test command
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Guidance on causes and potential troubleshooting for failed tests, per test basis.

## Peers

### Charon Peers

#### Ping

- Peers might have not started their nodes or are not reachable.

#### PingMeasure

- Peer might be too far away (geographically) from you.
- If the connection to the peer is indirect, the route is from your node, to the relay, to the peer. Meaning you are measuring the travel time to the relay + from the relay to the peer: your node -> relay -> peer. Meaning, even if your peer's node is right next to yours, if the connection is hoping through a relay far away, the result will be dissatisfying.
- Your network latency might be high. Verify with the `charon test infra` tests.
- If the connection to the peer is indirect, the relay might be overloaded (although, very unlikely scenario).

#### PingLoad

Same causes as PingMeasure test apply here.

#### DirectConn

- Your or your peer's port might not be publicly exposed.
- Your or your peer's port might be behind a firewall.

### Charon Relays

#### PingRelay

- Relay might be down or unaccessible because of other reasons.

#### PingMeasureRelay

- Relay might be under heavy load.
- Your network latency might be high. Verify with the `charon test infra` tests.

### Self

#### Libp2pTCPPortOpenTest

- There might be another process running on the designated port (tcp/3610 by default).
- The process might have died.

## Beacon

#### Ping

- Beacon node might not be started or is not reachable.

#### PingMeasure

- Beacon node might be too far away (geographically) from you.
- Your network latency might be high. Verify with the `charon test infra` tests.

#### Version

- The beacon node version is not compatible with charon.

#### IsSynced

- Beacon node is not synced to the network.

#### PeerCount

- Beacon node does not have enough peers. This may result in slower fetching and broadcasting of slots and duties.

#### PingLoad

This is a load test, to enable it add the `--load-test` flag.

Same causes as PingMeasure test apply here.

#### Simulation

This is a load test, to enable it add the `--load-test` flag.

Same causes as PingMeasure test apply here and additionally:

- The infrastructure on which the beacon node run (amount of RAM, disk IOPS) might be not enough to hold the number of validators supplied.

## Validator

#### Ping

- Validator client might not be started or is not reachable.

#### PingMeasure

- Validator client might be too far away (geographically) from you. It is expected to run the validator client on the same machine.

#### PingLoad

Same causes as PingMeasure test apply here.

## MEV

#### Ping

- MEV relay might not be started or is not reachable.

#### PingMeasure

- MEV relay might be too far away (geographically) from you.
- Your network latency might be high. Verify with the `charon test infra` tests.

#### CreateBlock

Same causes as PingMeasure test apply here and additionally:

- MEV relay might be too slow in block production.

#### CreateMultipleBlocks

Same causes as CreateBlock test apply here and additionally:

## Infra

#### DiskWriteSpeed

- Your SSD/HDD write speed is too low. Minimum write speed is 500MBs, recommended write speed is 1000MBs.

#### DiskWriteIOPS

- Your SSD/HDD write operations per second are too low. Minimum write IOPS are 1000, recommended write IOPS are 2000.

#### DiskReadSpeed

- Your SSD/HDD read speed is too low. Minimum read speed is 500MBs, recommended read speed is 1000MBs.

#### DiskReadIOPS

- Your SSD/HDD read operations per second are too low. Minimum read IOPS are 1000, recommended read IOPS are 2000.

#### AvailableMemory

- Your available memory (RAM) is not enough. Minimum available memory should be 2GB, recommended available memory is 4GB. Note that this test is best possible estimation, as memory availability is hard to be predicted, especially if the command is ran in a virtualised environment (i.e.: Docker container).

#### TotalMemory

- Your total memory (RAM) is not enough. Minimum total memory should be 4GB, recommended total memory is 8GB.

#### InternetLatency

- Your internet latency to the nearest server is too high. Latency is expected to be at least less than 50ms and at best less than 20ms.

#### InternetDownloadSpeed

- Your internet download speed from the nearest server is too low. Download speed is expected to be at least above 15MBps and at best above 50MBps.

#### InternetUploadSpeed

- Your internet upload speed to the nearest server is too low.Upload speed is expected to be at least above 15MBps and at best above 50MBps.
