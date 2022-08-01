package outputport

import (
	"github.com/konpyutaika/nifikop/pkg/util/clientconfig"

	nigoapi "github.com/erdrix/nigoapi/pkg/nifi"
	"github.com/konpyutaika/nifikop/pkg/clientwrappers"
	"github.com/konpyutaika/nifikop/pkg/common"
	ctrl "sigs.k8s.io/controller-runtime"
)

var log = ctrl.Log.WithName("outputport-method")

// StopPort will the port on NiFi
func StopPort(port nigoapi.PortEntity, config *clientconfig.NifiConfig) (*nigoapi.ProcessorStatusDto, error) {

	nClient, err := common.NewClusterConnection(log, config)
	if err != nil {
		return nil, err
	}

	entity, err := nClient.UpdateOutputPortRunStatus(port.Id, nigoapi.PortRunStatusEntity{
		Revision: port.Revision,
		State:    "STOPPED",
	})
	if err := clientwrappers.ErrorUpdateOperation(log, err, "Stop output port"); err != nil {
		return nil, err
	}

	return entity.Status, nil
}

// StartPort will the port on NiFi
func StartPort(port nigoapi.PortEntity, config *clientconfig.NifiConfig) (*nigoapi.ProcessorStatusDto, error) {

	nClient, err := common.NewClusterConnection(log, config)
	if err != nil {
		return nil, err
	}

	entity, err := nClient.UpdateOutputPortRunStatus(port.Id, nigoapi.PortRunStatusEntity{
		Revision: port.Revision,
		State:    "RUNNING",
	})
	if err := clientwrappers.ErrorUpdateOperation(log, err, "Start output port"); err != nil {
		return nil, err
	}

	return entity.Status, nil
}
