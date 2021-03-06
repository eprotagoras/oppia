// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Directive for the GraphInput response.
 *
 * IMPORTANT NOTE: The naming convention for customization args that are passed
 * into the directive is: the name of the parameter, followed by 'With',
 * followed by the name of the arg.
 */

oppia.directive('oppiaResponseGraphInput', [
  'HtmlEscaperService', 'UrlInterpolationService', 'graphDetailService',
  'GRAPH_INPUT_LEFT_MARGIN',
  function(
      HtmlEscaperService, UrlInterpolationService, graphDetailService,
      GRAPH_INPUT_LEFT_MARGIN) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: UrlInterpolationService.getExtensionResourceUrl(
        '/interactions/GraphInput/directives/' +
        'graph_input_response_directive.html'),
      controller: ['$scope', '$attrs', function($scope, $attrs) {
        $scope.graph = HtmlEscaperService.escapedJsonToObj($attrs.answer);
        $scope.VERTEX_RADIUS = graphDetailService.VERTEX_RADIUS;
        $scope.EDGE_WIDTH = graphDetailService.EDGE_WIDTH;
        $scope.GRAPH_INPUT_LEFT_MARGIN = GRAPH_INPUT_LEFT_MARGIN;

        $scope.getDirectedEdgeArrowPoints = function(index) {
          return graphDetailService.getDirectedEdgeArrowPoints(
            $scope.graph, index);
        };

        $scope.getEdgeCentre = function(index) {
          return graphDetailService.getEdgeCentre($scope.graph, index);
        };
      }]
    };
  }
]);
