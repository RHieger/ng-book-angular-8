#!/usr/bin/env bats
DIR=$(dirname $BATS_TEST_FILENAME)
BGPID=''

load "${NGBOOK_ROOT}/scripts/bats/fullstack.bats"
load "${NGBOOK_ROOT}/scripts/bats-support/load.bash"
load "${NGBOOK_ROOT}/scripts/bats-assert/load.bash"

@test "how_angular_works/inventory-app e2e passses" {
  cd $DIR
  run_ng_e2e $TEST_TMP_DIR
  run cat ${TEST_TMP_DIR}/log.txt
  assert_output --partial 'SUCCESS'
}

setup() {
  echo "travis_fold:start:how_angular_works/inventory-app"
  cd $DIR
  TEST_TMP_DIR="$(mktemp -d -t fullstackXXX)"
  kill_ng_cli || :
  kill_by_port 4200
  # ng serve 3>- &
  true
}

teardown() {
  cd $DIR
  kill_ng_cli || :
  # temp_del "$TEST_TMP_DIR"
  kill_by_port 4200
  echo "travis_fold:end:how_angular_works/inventory-app"
  true
}
